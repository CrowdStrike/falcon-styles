import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary, {
  expand: {
    typography: false
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

const shared = StyleDictionary.extend({
  source: ['tokens/foundation.json', 'tokens/shared.json'],
  platforms: {
    css: {
      prefix: 'toucan',
      transforms,
      buildPath: 'styles/',
      files: [
        {
          destination: 'shared.css',
          format: 'css/variables',
          filter: (token) => {
            // remove foundation tokens
            return !token.filePath.includes('foundation');
          },
        },
      ],
    },
  },
});

const light = StyleDictionary.extend({
  source: ['tokens/foundation.json', 'tokens/light.json'],
  platforms: {
    css: {
      prefix: 'toucan',
      transforms,
      buildPath: 'styles/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables',
          filter: (token) => {
            // remove foundation tokens
            return !token.filePath.includes('foundation');
          }
        },
      ],
    },
  },
});

const dark = StyleDictionary.extend({
  source: ['tokens/foundation.json', 'tokens/dark.json'],
  platforms: {
    css: {
      prefix: 'toucan',
      transforms,
      buildPath: 'styles/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables',
          filter: (token) => {
            // remove foundation tokens
            return !token.filePath.includes('foundation');
          }
        },
      ],
    },
  },
})

shared.buildAllPlatforms();
light.buildAllPlatforms();
dark.buildAllPlatforms();