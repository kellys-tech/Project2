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
  console.log(userData);
  $.post('/api/users/login',userData).then(()=>{
    document.location.href='/';
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
  console.log(JSON.stringify(newUser));
  $.post('/api/users/sign-up',newUser).then((res)=>{

    alert('User has been created');
    console.log(res);

  }).catch((err)=>{
    throw err.message ;
  });
}

$('#signup-btn').on('click',(e)=>{
  e.preventDefault();

  signUp();
});