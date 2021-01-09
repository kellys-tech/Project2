const submitBtn = $('#login-btn');
const userInput = $('#inputEmail');
const pass = $('#inputPassword');

function login(){

  const userData = {
    email: userInput.val(),
    password: pass.val()
  };

  if(!userInput.val()){
    alert('Incorrect email or password, please try again');
  }
  if(!pass.val()){
    alert('Incorrect email or password, please try again');
  }
  $.post('/api/users/login',userData).then(()=>{
    document.location.href='/';
  }).fail(()=>{
    alert('Incorrect email or password, please try again');
  });
}


submitBtn.on('click',(e)=>{
  e.preventDefault();
  login();

});
//sign up
const name = $('#name-signup');
const email = $('#email-signup');
const password = $('#password-signup');
const income = $('#income-signup');

function signUp(){

  const newUser = {
    name:name.val(),
    email: email.val(),
    income:parseInt(income.val()),
    password:password.val(),
  };
  if(!email.val()){
    alert('email is needed to sign up');
    return;
  }
  if(!password.val()){
    alert('password is needed to sign up');
    return;
  }
  $.post('/api/users/sign-up',newUser).then(()=>{

    alert('User has been created');

    document.location.href = '/';
  }).catch((err)=>{
    throw err.message ;
  });
}

$('#signup-btn').on('click',(e)=>{
  e.preventDefault();

  signUp();
});