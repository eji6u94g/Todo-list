<template>
  <h1>To do List</h1>
  <div class="container">
    <Navbar />

    <main class="to-do-items-container">
      <h2>to-do-items-title</h2>

      <div class="to-do-items">
        <div class="to-do-item">
          <div>
            <input type="checkbox" class="toggle" id="1" />
            <label for="1"></label>
            <span>to-do-item-name</span>
          </div>
          <i class="fa-regular fa-star"></i>
        </div>

        <!-- <div class="to-do-item">
          <div>
            <input type="checkbox" class="toggle" />
            <label for=""></label>
            <span>to-do-item-name</span>
          </div>
          <i class="fa-regular fa-star"></i>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss">
@mixin hover-effect {
  border-radius: 6px;
  background-color: #343436;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0 0;
}
h1 {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: row;
  .to-do-items-container {
    flex-grow: 1;
    padding-left: 2rem;
    padding-right: 2rem;
    .to-do-item {
      background-color: #242426;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 0.5rem;
      margin-top: 0.3rem;
      div {
        position: relative;
      }
      input {
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        border: none;
        -webkit-appearance: none;
        appearance: none;
        opacity: 0;
      }
      .toggle + label {
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto auto;
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center left;
      }
      .toggle:checked + label {
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E");
      }
      span {
        padding-left: 3.5rem;
      }
      svg:hover {
        filter: invert(0.3);
      }
      &:hover {
        @include hover-effect();
      }
    }
  }
}
</style>
