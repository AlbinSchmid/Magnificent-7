<template>
  <header class="headline">
    <div class="blue-div"></div>
    <h1>The Magnificent Seven Companies</h1>
  </header>
  <CompanyList></CompanyList>
</template>

<script>
import CompanyList from './components/company-list/CompanyList.vue';

export default {
  components: {
    CompanyList
  }
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

body {
  font-family: 'Arial', sans-serif;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  width: 100vw;
  height: 100vh;
  padding: 40px;
  color: white;
}

.headline {
  left: 0;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: -40px;
}

h1 {
  font-size: 36px;
}

.blue-div {
  background-color: #39DAFF;
  width: 96px;
  height: 32px;
  gap: 0px;
  border-radius: 0px 100px 100px 0px;
  opacity: 0px;

}
</style>
