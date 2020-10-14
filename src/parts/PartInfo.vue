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

import availableParts from '../data/parts';

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
  computed: {
    part() {
      const { partType, id } = this;
      return availableParts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
