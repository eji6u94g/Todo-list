<template>
  <nav>
    <div class="user-name">
      <img src="" alt="avator" />
      <span>user-name</span>
    </div>

    <div class="query-by-keyword">
      <input type="search" placeholder="搜尋" results />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <div class="query-by-options">
      <button><i class="fa-solid fa-sun"></i>我的今天</button>
      <button><i class="fa-solid fa-star"></i>重要</button>
      <button><i class="fa-solid fa-calendar"></i>已計劃</button>
      <button><i class="fa-solid fa-house"></i>全部</button>
    </div>

    <span class="split-line"></span>

    <div class="query-by-type">
      <button><i class="fa-solid fa-bars"></i>分類1</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@mixin hover-effect {
  border-radius: 6px;
  background-color: #343436;
}
nav {
  width: 15vw;
  min-width: 250px;
  background-color: #242426;
  color: white;
  // padding-left: 1rem;
  // padding-right: 1rem;
}
div.user-name {
  padding: 0.75rem 1rem;
}
div.query-by-keyword {
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem;
}
button {
  border: 0;
  background-color: none;
  background: none;
  outline: none;
  color: white;
  text-align: start;
  padding: 0.5rem 0.5rem;
  svg {
    padding-right: 1rem;
  }
  &:hover {
    @include hover-effect();
  }
}
span.split-line {
  display: block;
  height: 1px;
  width: 95%;
  background-color: #313033;
  margin: 0.25rem 0;
}
</style>