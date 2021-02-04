const fs = require('fs');
const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir);
}
const join = path.join;
function getEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      if (item !== 'style') {
        ret[item] = resolve(join(itemPath, 'index.js'));
      }
    } else {
      const [name] = item.split('.');
      ret[name] = resolve(itemPath);
    }
    return ret;
  }, {})
  return entries;
}
//生成环境配置
const BUILD_CONFIG = {
  css: {
    extract: {
      filename: 'style/[name].css'
    }
  },
  configureWebpack: {
    entry: {
      ...getEntries('packages'),
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2',
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
      }
    }
  },
  chainWebpack: config => {
    config.entryPoints.delete('app');//清除原先入口文件配置中的app项

    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('hmr');
  },
  outputDir: 'lib',
  productionSourceMap: false,
};
//开发环境配置
const DEV_CONFIG = {
  pages: {
    index: {
      entry: 'examples/main.js',
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        'assets': resolve('src/assets'),
      }
    }
  },
  devServer: {
    port: 8081,
    hot: true,
    open: 'Google Chrome'
  }
}
//UI文档开发环境配置
const DOC_DEV_CONFIG = {
  pages: {
    index: {
      entry: 'doc/main.js',
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.md', '.json'],
      alias: {
        '@': resolve('packages'),
        'assets': resolve('doc/assets'),
        'images': resolve('doc/assets/images'),
        'views': resolve('doc/views'),
        'components': resolve('doc/components'),
        'docs': resolve('doc/docs'),
        'config': resolve('doc/config'),
        'service': resolve('doc/service')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vueLoader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('mdLoader')
      .loader(path.resolve(__dirname, './doc/md-loader/index.js'))
  },
  devServer: {
    port: 8080,
    hot: true,
    open: 'Google Chrome'
  }
}
//UI文档开发环境配置
const DOC_BUILD_CONFIG = {
  pages: {
    index: {
      entry: 'doc/main.js',
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.md', '.json'],
      alias: {
        '@': resolve('packages'),
        'assets': resolve('doc/assets'),
        'views': resolve('doc/views'),
        'components': resolve('doc/components'),
        'docs': resolve('doc/docs'),
        'config': resolve('doc/config'),
        'service': resolve('doc/service')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vueLoader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('mdLoader')
      .loader(path.resolve(__dirname, './doc/md-loader/index.js'))
  },
  outputDir: 'dist',
  productionSourceMap: false,
}
switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = BUILD_CONFIG;
    break;
  case 'doc':
    module.exports = DOC_DEV_CONFIG;
    break;
  case 'docbuild':
    module.exports = DOC_BUILD_CONFIG;
    break;
  default:
    module.exports = DEV_CONFIG;
} 
