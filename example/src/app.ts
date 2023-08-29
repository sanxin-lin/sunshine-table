import { computed, ref } from 'vue';
import IconView from './views/icon/Index.vue';
import ButtonView from './views/button/Index.vue';

export const enum ViewType {
  Icon = 'Icon',
  Button = 'Button',
}

export const views = [
  {
    view: IconView,
    type: ViewType.Icon,
  },
  {
    view: ButtonView,
    type: ViewType.Button,
  },
];

export const useViews = () => {
  const tab = ref(ViewType.Icon);

  const handleChangeTab = (type: ViewType) => {
    tab.value = type;
  };

  const View = computed(() => {
    const view = views.find(({ type }) => type === tab.value)!.view
    return view
  });

  const tabs = [
    {
      content: 'Icon',
      onClick: () => handleChangeTab(ViewType.Icon)
    },
    {
      content: 'Button',
      onClick: () => handleChangeTab(ViewType.Button)
    }
  ]

  return {
    handleChangeTab,
    View,
    tabs
  };
};
