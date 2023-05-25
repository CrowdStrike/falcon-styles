import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
const { formattedVariables } = StyleDictionary.formatHelpers;

registerTransforms(StyleDictionary, {
  expand: {
    typography: false
  },
});

StyleDictionary.registerFormat({
  name: 'theme-light',
  formatter: function({dictionary, file, options}) {
    const { outputReferences } = options;
    return ':host, :root, .theme-light {\n' +
      formattedVariables({format: 'css', dictionary, outputReferences}) +
      '\n}\n';
  }
});

StyleDictionary.registerFormat({
  name: 'theme-dark',
  formatter: function({dictionary, file, options}) {
    const { outputReferences } = options;
    return ':host, .theme-dark {\n' +
      formattedVariables({format: 'css', dictionary, outputReferences}) +
      '\n}\n';
  }
});

const transforms = [
  'ts/descriptionToComment',
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

['shared', 'light', 'dark'].map((tokenSet) => {
  let sd = StyleDictionary.extend({
    source: [`tokens/${tokenSet}.json`],
    platforms: {
      css: {
        prefix: 'toucan',
        transforms,
        buildPath: 'styles/',
        options: {
          'showFileHeader': false,
        },
        files: [
          {
            destination: `${tokenSet}.css`,
            format: tokenSet === 'shared' ? 'css/variables' : `theme-${tokenSet}`,
          },
        ],
      },
    },
  });

  sd.buildAllPlatforms();
});
