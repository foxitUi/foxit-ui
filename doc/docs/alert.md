
## 12
:::demo 
```html
<div class="custom-tree-container">
  <div class="block">
    <p>使用 render-content</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
      >
    </el-tree>
  </div>
</div>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [
      {
        id: 1,
        label: '一级 1',
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
      }
    },

    methods: {
      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}11</span>
          </span>);
      }
    }
  };
</script>
```
:::