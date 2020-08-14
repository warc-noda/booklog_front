<template>
  <section id="top">
    <div class="content">
      <div class="content__inner">
        <h1 class="content__title">Booklog</h1>
        <div class="content__form__wrapper">
          <form class="content__form">
            <div class="content__form--input">
              <input class="input" type="text" placeholder="メールアドレス">
            </div>
            <div class="content__form--input">
              <input class="input" type="text" placeholder="パスワード">
            </div>
            <div class="content__form--button">
              <button class="button button--default">ログイン</button>
            </div>
            <div class="content__form--facebook">
              <hr>
              <p>または</p>
              <nuxt-link class="facebook-button" to="/facebook">Facebookでログイン</nuxt-link>
              <!-- <nuxt-link class="signup-button" to="/sign-up">サインアップ</nuxt-link> -->
            </div>
          </form>
          <div class="content__signup">
            アカウントをお持ちでない方は<nuxt-link class="content__signup__link" to="/signup">こちら</nuxt-link>へ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'

export default Vue.extend({
  // mounted() {
  //   let originalPrice = 100000
  //   let benefit = 0;
  //   console.log('originalPrice::::::::::')
  //   console.log(originalPrice)
  //   for (let i = 0; i < 10; i++) {
  //     console.log((i+1) + '年目::::::::::')
  //     benefit = originalPrice * 0.002
  //     originalPrice += benefit
  //     console.log('benefit:::::::::')
  //     console.log(benefit)
  //     console.log('originalPrice::::::::::')
  //     console.log(originalPrice)
  //   }
  // }
})
</script>

<style lang="scss">
  #top {
    width: 100%;
    height: 100vh;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/top_sample1.jpg');
    background-size: cover;
    background-position: center;

    &__inner {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }

    &__title {
      color: #00b868;
      font-size: 30px;
      padding: 10px 20px;
    }

    &__form {
      background-color: #fff;
      border: 1px solid #cccccc;
      padding: 30px 20px 20px 20px;

      &__wrapper {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        left: 0;
        box-sizing: border-box;
        max-width: 350px;
        margin: 0 auto;
      }

      &--input {
        width: 100%;
        margin: 10px 0 0 0;

        &:first-child {
          margin: 0;
        }
      }

      &--button {
        width: 100%;
        margin: 10px 0 0 0;
      }

      &--facebook {
        position: relative;
        margin: 20px 0 0 0;

        hr {
          border: 1px solid #dbdbdb;
        }

        p {
          position: absolute;
          top: -9px;
          left: 0;
          right: 0;
          width: 55px;
          background: #fff;
          color: #8e8e8e;
          text-align: center;
          font-weight: bold;
          font-size: 13px;
          margin: 0 auto;
        }

        .facebook-button {
          display: block;
          text-decoration: none;
          color: #00b868;
          text-align: center;
          font-weight: bold;
          font-size: 13px;
          margin: 20px 0 0 0;
          padding: 10px 5px;

          &:hover {
            text-decoration: underline;
          }
        }

        .signup-button {
          display: block;
          text-decoration: none;
          background: #00b868;
          color: #fff;
          text-align: center;
          font-weight: bold;
          font-size: 13px;
          margin: 20px 0 0 0;
          padding: 10px 5px;
        }
      }
    }

    &__signup {
      background-color: #fff;
      border-radius: 2px;
      border: 1px solid #cccccc;
      text-align: center;
      font-size: 14px;
      margin: 20px 0 0 0;
      padding: 20px 0;

      &__link {
        text-decoration: none;
        color: #00b868;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
