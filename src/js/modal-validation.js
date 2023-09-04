const validationModal = new JustValidate('#one-click-buy-button-form',
  {
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
		validateBeforeSubmitting: true,
  },
);

validationModal

  .addField('#name-modal', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
		{
			rule: 'customRegexp',
			value: /^([А-Я]{1}[а-яё]{1,23})$/,
			errorMessage: 'Недопустимый формат',
		},
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'maxLength',
      value: 30,
    },

  ])

	.addField('#tel-modal', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
		{
			rule: 'number',
			errorMessage: 'Недопустимый формат',
		},
  ])

  .addField('#check-modal', [
    {
      rule: 'required',
      errorMessage: 'Необходимо поставить галочку',
    },
  ])
