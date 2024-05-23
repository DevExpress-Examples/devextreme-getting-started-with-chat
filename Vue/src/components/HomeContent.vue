<template>
  <DxSplitter :width="500" :height="400" :separator-size="5">
    <DxItem size="285px">
      <DxForm
        :form-data="employee"
        @field-data-changed="onFieldDataChanged"
      ></DxForm>
    </DxItem>
    <DxItem>
      <DxSplitter orientation="vertical" :separator-size="5">
        <DxItem size="80%">
          <div v-for="item in output" :key="item">{{ item }}</div>
        </DxItem>
        <DxItem :collapsible="true" minSize="40px">
          <DxButton text="Clear all entries" @click="resetFormAndOutput"></DxButton>
        </DxItem>
        <DxItem
          :collapsed="true"
          :collapsible="true"
          text="All rights are reserved © 2024"
          maxSize="30px"
        ></DxItem>
      </DxSplitter>
    </DxItem>
  </DxSplitter>
</template>

<script setup>
import { ref } from 'vue';
import 'devextreme/dist/css/dx.light.css';
import DxForm from 'devextreme-vue/form';
import DxButton from 'devextreme-vue/button';
import { DxSplitter, DxItem } from 'devextreme-vue/splitter';

const initialEmployee = {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
      Position: 'CEO',
      BirthDate: '1964/03/16',
      HireDate: '1995/01/15',
      Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
      Address: '351 S Hill St., Los Angeles, CA',
      Phone: '360-684-1334',
      Email: 'jheart@dx-email.com',
    };

    let employee = { ...initialEmployee };
    const output = ref(['Output:']);
    let suppressFieldChangeEvent = false;

    const onFieldDataChanged = (e) => {
      if (!suppressFieldChangeEvent) {
        output.value.push(e.value);
        console.log(output);
      }
    };

    const resetFormAndOutput = () => {
      suppressFieldChangeEvent = true;
      employee = { ...initialEmployee };
      output.value = ['Output:'];
      setTimeout(() => {
        suppressFieldChangeEvent = false;
      }, 0);
    };
</script>