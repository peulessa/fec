<template>
  <q-layout>
    <q-card
      class="flex flex-column q-mx-auto"
      style="max-width: max-content; margin-top: 5em; height: 600px"
    >
      <q-card-section
        style="
          background-image: url('./src/assets/images/bg-sidebar-desktop.svg');
          background-repeat: no-repeat;
          margin: 1em;
          padding: 2em;
          padding-right: 5em;
          max-width: fit-content;
        "
      >
        <div class="flex q-mb-lg">
          <div class="avatar">1</div>

          <div class="text-white">
            <p class="q-ma-none passo">PASSO 1</p>
            <strong class="q-ma-none">SUAS INFORMAÇÕES</strong>
          </div>
        </div>

        <div class="flex q-mb-lg">
          <div class="avatar">2</div>

          <div class="text-white">
            <p class="q-ma-none passo">PASSO 2</p>
            <strong class="q-ma-none">ESCOLHA UM PLANO</strong>
          </div>
        </div>

        <div class="flex q-mb-lg">
          <div class="avatar">3</div>

          <div class="text-white">
            <p class="q-ma-none passo">PASSO 3</p>
            <strong class="q-ma-none">SERVIÇOS ADICIONAIS</strong>
          </div>
        </div>

        <div class="flex q-mb-lg">
          <div class="avatar">4</div>

          <div class="text-white">
            <p class="q-ma-none passo">PASSO 4</p>
            <strong class="q-ma-none">RESUMO DO PEDIDO</strong>
          </div>
        </div>
      </q-card-section>

      <q-card-section style="margin-top: 3em; width: 28vw">
        <router-view />
      </q-card-section>
    </q-card>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.avatar {
  border: 0.1em solid white;
  border-radius: 50%;
  height: 2.2em;
  width: 2.2em;
  text-align: center;
  padding-top: 0.35em;
  color: white;
  margin-right: 1em;
  margin-top: 0.45em;
}

.passo {
  font-size: 0.8em;
  font-weight: 350;
}
</style>
