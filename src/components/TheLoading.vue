<template>
  <div class="loading">
    <div class="loading__animation"></div>
    <p class="loading__text">資料下載中...請稍後！</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .7);
}

.loading__animation {
  width: 50px;
  height: 50px;
  background-color: #2597c7;
  animation: loading 3s linear 0s infinite alternate none;
}

.loading__text {
  margin-top: 15px;
  font-size: 15px;
  color: #2597c7;
}

@keyframes loading {
  0% {
    transform: rotateX(0) rotateY(0);
  }

  25% {
    transform: rotateX(180deg) rotateY(0);
  }

  50% {
    transform: rotateX(180deg) rotateY(180deg);
  }

  75% {
    transform: rotateX(180deg) rotateY(360deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
