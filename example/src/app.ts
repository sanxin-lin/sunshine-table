import { computed, ref } from 'vue';
import IconView from './views/icon/Index.vue';
import ButtonView from './views/button/Index.vue';
import RadioView from './views/radio/Index.vue';
import CheckboxView from './views/checkbox/Index.vue';
import SwitchView from './views/switch/Index.vue';
import TextareaView from './views/textarea/Index.vue';
import FileView from './views/file/Index.vue';

export const enum ViewType {
  Icon = 'Icon',
  Button = 'Button',
  Radio = 'Radio',
  Checkbox = 'Checkbox',
  Switch = 'Switch',
  Textarea = 'Textarea',
  File = 'File'
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
  {
    view: RadioView,
    type: ViewType.Radio,
  },
  {
    view: CheckboxView,
    type: ViewType.Checkbox,
  },
  {
    view: SwitchView,
    type: ViewType.Switch,
  },
  {
    view: TextareaView,
    type: ViewType.Textarea,
  },
  {
    view: FileView,
    type: ViewType.File,
  },
];

export const useViews = () => {
  const tab = ref(ViewType.Icon);

  const handleChangeTab = (type: ViewType) => {
    tab.value = type;
  };

  const View = computed(() => {
    const view = views.find(({ type }) => type === tab.value)!.view;
    return view;
  });

  const tabs = [
    {
      content: ViewType.Icon,
      onClick: () => handleChangeTab(ViewType.Icon),
    },
    {
      content: ViewType.Button,
      onClick: () => handleChangeTab(ViewType.Button),
    },
    {
      content: ViewType.Radio,
      onClick: () => handleChangeTab(ViewType.Radio),
    },
    {
      content: ViewType.Checkbox,
      onClick: () => handleChangeTab(ViewType.Checkbox),
    },
    {
      content: ViewType.Switch,
      onClick: () => handleChangeTab(ViewType.Switch),
    },
    {
      content: ViewType.Textarea,
      onClick: () => handleChangeTab(ViewType.Textarea),
    },
    {
      content: ViewType.File,
      onClick: () => handleChangeTab(ViewType.File),
    },
  ];

  return {
    handleChangeTab,
    View,
    tabs,
  };
};
