<template>
  <div class="q-pb-md">
    <h3 class="q-ma-none q-pb-md">Informações Pessoais</h3>
    <p>Porfavor, insira seu nome, endereço de email e número de telefone.</p>
  </div>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-input
      filled
      v-model="name"
      label="Ex. Stephen King *"
      hint="Nome e Sobrenome"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Porfavor, digite seu nome']"
    />

    <q-input
      filled
      v-model="email"
      label="Ex. stephenking@mail.com *"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Porfavor, digite seu email',
      ]"
    />

    <q-input
      filled
      v-model="phone"
      label="Ex. +55 77 99999-9999 *"
      lazy-rules
      :rules="[
        (val) =>
          (val && val.length > 0) || 'Porfavor, digite seu número de contato',
      ]"
    />

    <q-toggle v-model="accept" label="I accept the license and terms" />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script setup></script>

<style scoped></style>
