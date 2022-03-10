<template>
  <nav>
    <div class="user-name">
      <img src="" alt="avator" />
      <span>user-name</span>
    </div>

    <div class="query-by-keyword d-flex align-items-center">
      <input type="search" placeholder="搜尋" results />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <div class="query-by-options d-flex flex-column">
      <button><i class="fa-solid fa-sun"></i>我的一天</button>
      <button><i class="fa-solid fa-star"></i>重要</button>
      <button><i class="fa-solid fa-calendar"></i>已計劃</button>
      <button><i class="fa-solid fa-house"></i>全部</button>
    </div>

    <span class="split-line"></span>

    <div class="query-by-type d-flex flex-column">
      <button><i class="fa-solid fa-bars"></i>分類1</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

nav {
  @include navbar-style();
}
div.user-name {
  padding: 0.75rem 1rem;
}
div.query-by-keyword {
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  input {
    outline: none;
    border-radius: 6px;
    border: 1px solid #313033;
    border-bottom: 0.5px solid gray;
    background-color: #242426;
    padding: 0.5rem 0.5rem;
    color: white;
    margin: 0;
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border-style: hidden;
      background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
        no-repeat 50% 50%;
      opacity: 1;
      background-size: contain;
      filter: invert(1);
    }
  }
  svg {
    margin: 0 0.5rem;
    padding: 0.5rem 0.5rem;
    &:hover {
      @include hover-effect();
    }
  }
}
div.query-by-options,
div.query-by-type {
  margin: 0.5rem 0.5rem;
}
button {
  @include common-button();
  &:hover {
    @include hover-effect();
  }
}
span.split-line {
  @include split-line();
}
</style>