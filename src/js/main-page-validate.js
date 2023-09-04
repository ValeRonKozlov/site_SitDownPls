const validationMainPage = new JustValidate('#feedback-form',
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

validationMainPage

  .addField('#name', [
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

	.addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
		{
			rule: 'number',
			errorMessage: 'Недопустимый формат',
		},
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])

  .addField('#feedback-check', [
    {
      rule: 'required',
      errorMessage: 'Необходимо поставить галочку',
    },
  ])
