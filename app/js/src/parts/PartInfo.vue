<template>
    <div>
        <div>
            <h1>{{part.title}}</h1>
        </div>
        <div>
            {{part.description}}
        </div>
    </div>
</template>

<script>

import getPartsMixin from './get-parts-mixin';

export default {
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  name: 'PartInfo',
  mixins: [getPartsMixin],
  computed: {
    part() {
      const { partType, id } = this;
      return this.parts.[partType].find((part) => part.id === +id);
    },
  },
};
</script>
