
# FILES - CONFIG

    - One of the main advantages of Vitest is its unified configuration with Vite. If present, vitest will read your root vite.config.ts 
    to match with the plugins and setup as your Vite app. For example, your Vite resolve.alias and plugins configuration will work out-of-the-box. If you want a different configuration during testing, you can:


    * Create vitest.config.ts, which will have the higher priority
    * Pass --config option to CLI, e.g. vitest --config ./path/to/vitest.config.ts
    * Use process.env.VITEST or mode property on defineConfig (will be set to test if not overridden) to conditionally apply different      configuration in vite.config.ts
    
    To configure vitest itself, add test property in your Vite config. You'll also need to add a reference to Vitest types using a triple slash command at the top of your config file, if you are importing defineConfig from vite itself.


    import { defineConfig } from 'vitest/config'

    export default defineConfig({
    test: {
        // ...
    },
    })

    
