import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import { Counter } from '@components';
import {
  AlertCircleIcon,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import { useGroceryList } from '@hooks';
import {
  EDIT_ITEM_SCREEN_ROUTE,
  RootStackNavigationProp,
  RootStackParamList,
} from '@navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './AddEditItemScreen.styles';

type RouteProps = RouteProp<RootStackParamList, typeof EDIT_ITEM_SCREEN_ROUTE>;

export const AddEditItemScreen = () => {
  const route = useRoute<RouteProps>();

  const [title, setTitle] = useState<string>(route?.params?.title || '');
  const [isTitleInvalid, setIsTitleInvalid] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(route?.params?.amount || 1);
  const [isAmountInvalid, setIsAmountInvalid] = useState<boolean>(false);

  const { t } = useTranslation();

  const { goBack } = useNavigation<RootStackNavigationProp>();

  const { createGroceryListItem, editGroceryListItemMutation } =
    useGroceryList();

  const onChangeTitle = (newTitle: string) => {
    if (isTitleInvalid) setIsTitleInvalid(false);
    setTitle(newTitle);
  };

  const onChangeAmount = (newValue: string | number) => {
    const newAmountNumber = Number(newValue);
    if (isAmountInvalid) setIsAmountInvalid(false);
    setAmount(newAmountNumber);
  };

  const onPressSave = async () => {
    const titleTrimmedValue = title.trim();
    if (titleTrimmedValue.length === 0 || amount === 0) {
      setIsTitleInvalid(titleTrimmedValue.length === 0);
      setIsAmountInvalid(amount === 0);
      return;
    }

    if (route.name === EDIT_ITEM_SCREEN_ROUTE) {
      await editGroceryListItemMutation.mutate({
        id: route.params.id,
        checked: route.params.checked,
        title: titleTrimmedValue,
        amount,
      });
    } else {
      await createGroceryListItem.mutate({
        title: titleTrimmedValue,
        amount,
      });
    }

    goBack();
  };

  return (
    <ScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.scrollViewContainerStyles}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={40}
        flex={1}
      >
        <VStack
          flex={1}
          pt="$8"
          px="$4"
          pb="$20"
          justifyContent="space-between"
        >
          <VStack>
            <FormControl isRequired isInvalid={isTitleInvalid}>
              <FormControlLabel mb="$2">
                <FormControlLabelText>
                  {t('addEditItemScreen.titleInputLabel')}
                </FormControlLabelText>
              </FormControlLabel>
              <Input variant="outline" size="md">
                <InputField
                  value={title}
                  onChangeText={onChangeTitle}
                  placeholder={t('addEditItemScreen.titleInputPlaceholder')}
                />
              </Input>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {t('addEditItemScreen.titleError')}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
            <FormControl isInvalid={isAmountInvalid}>
              <FormControlLabel mb="$2" mt="$4">
                <FormControlLabelText>
                  {t('addEditItemScreen.amountInputLabel')}
                </FormControlLabelText>
              </FormControlLabel>
              <Counter value={amount} onChange={onChangeAmount}>
                <Input flex={1} variant="outline" size="md">
                  <InputField
                    value={`${amount}`}
                    keyboardType="number-pad"
                    placeholder={t('addEditItemScreen.amountInputPlaceholder')}
                    onChangeText={onChangeAmount}
                  />
                </Input>
              </Counter>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {t('addEditItemScreen.amountError')}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </VStack>
          <Button
            isDisabled={createGroceryListItem.isPending}
            onPress={onPressSave}
            action="primary"
          >
            <ButtonText>{t('addEditItemScreen.save')}</ButtonText>
          </Button>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
