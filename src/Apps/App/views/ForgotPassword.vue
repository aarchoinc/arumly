<template>
  <main id="login" class="auto">
    <div class="login-form">
      <div class="headline mb-15 b fs-1p7em">Forgot your password?</div>

      <div class="desc align-c">
        Enter the email address associated with your account and we will send
        you a link to reset your password.
      </div>
      <div class="mt-20">
        <form class="pwd-reset">
          <input
            type="email"
            v-model="email"
            placeholder="Email Address"
            required
            class="input-underline white-bg input-bg bg-un"
          />

          <BaseBtn
            class="btz -fill-6 fs-1em ptb-14 b-600 w-100p bdrd-3"
            type="submit"
          >
            SUBMIT
          </BaseBtn>
        </form>
        <router-link class="mt-10 align-r" :to="{ name: 'login' }" tag="div">
          <a class="forgot-password quinary b">Back To Login</a>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "forgot-password",
  data() {
    return {
      email: "",
      error: null,
    };
  },
};
</script>

<style lang="scss" scoped>
#login {
  margin-top: 120px !important;
  padding: 0 20px;
  width: 350px;
}

.login-user {
  margin: 0 auto;
}

.headline {
  text-align: center;
}
.forgot-password {
  text-align: right;
}

a {
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}

input,
select,
option,
textarea {
  padding: 15px;
  margin-bottom: 15px;
  width: 100%;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #2b323b;
  background: #ffffff;
}
.pwd-reset {
  input {
    padding: 15px;
    background-color: #f1f1f1;
    border: 1px solid #cccccc;
  }

  ::placeholder {
    font-weight: 300;
    font-size: 12px;
  }
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #374a65;
  opacity: 1; /* Firefox */
  font-weight: 500;
  background-color: transparent !important;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #374a65;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #374a65;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.button {
  width: 100%;
  background-color: #bcd2ed;
  padding: 14px 0px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;
}

.con-put-1,
.con-put-2 {
  display: flex;
}
.icon-bg {
  img {
    max-width: 15px;
  }
  background-color: #ffffff;
  max-height: 43.5px;
  padding: 15px 20px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.con-put-2 .icon-bg {
  max-height: 43.5px;
}

.desc {
  font-size: 12px;
}

.exit {
  float: right;
}
</style>
