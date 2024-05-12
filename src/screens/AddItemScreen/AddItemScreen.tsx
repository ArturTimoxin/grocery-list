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
import { LIST_SCREEN_ROUTE, RootStackNavigationProp } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AddItemScreen.styles';

export const AddItemScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [isTitleInvalid, setIsTitleInvalid] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [isAmountInvalid, setIsAmountInvalid] = useState<boolean>(false);
  const { t } = useTranslation();
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const { createGroceryListItem } = useGroceryList();

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
    await createGroceryListItem.mutate({
      title: titleTrimmedValue,
      amount,
    });
    navigate(LIST_SCREEN_ROUTE);
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
                  {t('addItemScreen.titleInputLabel')}
                </FormControlLabelText>
              </FormControlLabel>
              <Input variant="outline" size="md">
                <InputField
                  value={title}
                  onChangeText={onChangeTitle}
                  placeholder="Enter title here"
                />
              </Input>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {t('addItemScreen.titleError')}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
            <FormControl isInvalid={isAmountInvalid}>
              <FormControlLabel mb="$2" mt="$4">
                <FormControlLabelText>
                  {t('addItemScreen.amountInputLabel')}
                </FormControlLabelText>
              </FormControlLabel>
              <Counter value={amount} onChange={onChangeAmount}>
                <Input flex={1} variant="outline" size="md">
                  <InputField
                    value={`${amount}`}
                    keyboardType="number-pad"
                    placeholder="Enter amount here"
                    onChangeText={onChangeAmount}
                  />
                </Input>
              </Counter>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {t('addItemScreen.amountError')}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </VStack>
          <Button
            isDisabled={createGroceryListItem.isPending}
            onPress={onPressSave}
            action="primary"
          >
            <ButtonText>{t('addItemScreen.save')}</ButtonText>
          </Button>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
