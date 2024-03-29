import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
const { formattedVariables } = StyleDictionary.formatHelpers;

registerTransforms(StyleDictionary, {
  expand: {
    typography: false,
  },
});

StyleDictionary.registerFormat({
  name: 'light',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return (
      ':host,\n:root,\n.theme-light {\n' +
      '  color-scheme: light;\n' +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

StyleDictionary.registerFormat({
  name: 'light-component',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return (
      ':host,\n:root,\n.theme-light {\n' +
      '  color-scheme: light;\n' +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

StyleDictionary.registerFormat({
  name: 'dark',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return (
      ':host,\n.theme-dark {\n' +
      '  color-scheme: dark;\n' +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

StyleDictionary.registerFormat({
  name: 'dark-component',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return (
      ':host,\n.theme-dark {\n' +
      '  color-scheme: dark;\n' +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

StyleDictionary.registerFormat({
  name: 'system',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return (
      ':host,\n:root {\n' +
      formattedVariables({ format: 'css', dictionary, outputReferences }) +
      '\n}\n'
    );
  },
});

const transforms = [
  // 'ts/descriptionToComment',
  'ts/size/px',
  'ts/opacity',
  'ts/size/lineheight',
  'ts/type/fontWeight',
  'ts/resolveMath',
  'ts/size/css/letterspacing',
  'ts/typography/css/shorthand',
  'ts/border/css/shorthand',
  'ts/shadow/css/shorthand',
  'ts/color/css/hexrgba',
  'ts/color/modifiers',
  'name/cti/kebab',
];

['system', 'light', 'light-component', 'dark', 'dark-component'].map((format) => {
  let sd = StyleDictionary.extend({
    source: [`tokens/${format}.json`],
    platforms: {
      css: {
        prefix: 'cs',
        transforms,
        buildPath: 'styles/',
        options: {
          showFileHeader: false,
        },
        files: [
          {
            destination: `${format}.css`,
            format,
          },
        ],
      },
    },
  });

  sd.buildAllPlatforms();
});
