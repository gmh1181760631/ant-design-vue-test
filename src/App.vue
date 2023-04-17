<template>
  <div id="app">
    <div>
    <a-transfer
      class="tree-transfer"
      :data-source="dataSource"
      :target-keys="targetKeys"
      :render="item => item.title1"
      :show-select-all="false"
      @change="onChange"
    >
      <template
        slot="children"
        slot-scope="{ props: { direction, selectedKeys }, on: { itemSelect } }"
      >
        <a-tree
          v-if="direction === 'left'"
          blockNode
          checkable
          defaultExpandAll
          :checkedKeys="[...selectedKeys, ...targetKeys]"
          :treeData="treeData"
          :replaceFields="{children:'children1', title:'title1', key:'key' }"
          @check="
            (_, props) => {
              onChecked(_, props, [...selectedKeys, ...targetKeys], itemSelect);
            }
          "
          @select="
            (_, props) => {
              onChecked(_, props, [...selectedKeys, ...targetKeys], itemSelect);
            }
          "
        />
      </template>
    </a-transfer>
  </div>
  </div>
</template>

<script>

const treeData = [
  { key: '0-0', title1: '0-0' },
  {
    key: '0-1',
    title1: '0-1',
    children1: [
      { key: '0-1-0', title1: '0-1-0' },
      { key: '0-1-1', title1: '0-1-1' },
    ],
  },
  { key: '0-2', title1: '0-3' ,
  children1: [
      { key: '0-2-1', title1: '0-1-0' },
      { key: '0-2-2', title1: '0-1-1' },
    ],
},
];

// 穿梭框绑定的数据，需要将树形数据转化为平铺数据
const transferDataSource = [];
function flatten(list = []) {
  list.forEach(item => {
    transferDataSource.push(item);
    flatten(item.children1);
  });
}
flatten(JSON.parse(JSON.stringify(treeData)));

// 点击节点时也会选中节点对应的复选框
function isChecked(selectedKeys, eventKey) {
  return selectedKeys.indexOf(eventKey) !== -1;
}

// 给树形数据的每一项添加是否选中的标记
function handleTreeData(data, targetKeys = []) {
  data.forEach(item => {
    item['disabled'] = targetKeys.includes(item.key);
    if (item.children1) {
      handleTreeData(item.children1, targetKeys);
    }
  });
  return data;
}

export default {
  data() {
    return {
      targetKeys: [],
      dataSource: transferDataSource,
    };
  },
  computed: {
    // 穿梭框变了后，树形数据每一项的标记进行更新
    treeData() {
      return handleTreeData(treeData, this.targetKeys);
    },
  },
  methods: {
    // 穿梭框发生改变时触发
    onChange(targetKeys) {
      console.log('Target Keys:', targetKeys);
      this.targetKeys = targetKeys;
    },
    onChecked(_, e, checkedKeys, itemSelect) {
      console.log(itemSelect);
      const { eventKey } = e.node;
      itemSelect(eventKey, !isChecked(checkedKeys, eventKey));
    },
  },
};
</script>

<style>

</style>
