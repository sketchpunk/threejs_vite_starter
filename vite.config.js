import path                 from 'path';
import { defineConfig }     from 'vite';
import { directoryPlugin }  from 'vite-plugin-list-directory-contents';

export default defineConfig(({ command, mode, ssrBuild, isPreview }) => {
    if ( command === 'serve') {
      return {
            base      : './',
            // publicDir : path.join( __dirname, 'prototypes' ),
            plugins   : [
                directoryPlugin( {
                    baseDir     : __dirname,
                    filterList  : [ 'node_modules', '.git', '.github', '_store', '_images', 'dist', 'src', '.*' ],
                }),
            ],

            server    : {
                host        : 'localhost',
                port        : 3015,
                open        : '/',
                strictPort  : true,
            },

            resolve : {
                alias:{
                    // '@three'          : path.resolve( __dirname, './prototypes/_thirdparty/three.module.js' ),
                    'OrbitControls'  : path.resolve( __dirname, './node_modules/three/examples/jsm/controls/OrbitControls.js' ),
                }
            }
        }   
    }
});