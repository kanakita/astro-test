import JustValidate from 'just-validate';

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

interface Validator {
  [key: string]: {
    [key: string]: string
  }
}

export default function formValidation() {
  const form = document.querySelector('#form');
  if(form === null) return
  const validator = new JustValidate(form);
  const {name, furigana, email, emailRequired, contents}: Validator = {
    name: {
      rule: 'required',
      errorMessage: 'お名前は必須です'
    },
    furigana: {
      rule: 'required',
      errorMessage: 'ふりがなは必須です'
    },
    email: {
      rule: 'email',
      errorMessage: 'Emailの形式で入力してください。'
    },
    emailRequired: {
      rule: 'required',
      errorMessage: 'Emailは必須です'
    },
    contents: {
      rule: 'required',
      errorMessage: 'お問い合わせ内容は必須です'
    },
  }

  validator.addField('#author', [name])
    .addField('#furigana', [furigana])
    .addField('#email', [email, emailRequired])
    .addField('#email_confirm', [email, emailRequired])
    .addField('#contents', [contents])
    .onValidate(() => {
      const email = document.querySelector<HTMLInputElement>('#email');
        const emailConfirm = document.querySelector<HTMLInputElement>('#email_confirm');
      if ( email.value && emailConfirm.value ) {
        email.value !== emailConfirm.value && validator.showErrors({ '#email_confirm': 'メールアドレスが一致しません' })
      }
    })
    .onSuccess(() => {
      const form = document.querySelector('#form') as HTMLFormElement;
      if(form === null) return
      form.submit();
    })
}
