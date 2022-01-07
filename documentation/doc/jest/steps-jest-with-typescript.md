

## STEPS JEST WITH TYPESCRIPT

1. mkdir folder - cd folder

2. npm init -y

3. npm install typescript --save-dev

4. npx tsc --init or tsc --init (tsconfig.json)

    "include": ["./src/**/*"],
    "exclude": ["node_modules"],

    "compilerOptions": {

        "outDir": "./out",
        "rootDir": "./src"

    }

5. Config package.json

    "scripts": {
        "build": "tsc"
        "test": "jest"
    }

6. Dependencys Jest: npm i -D jest ts-jest @types/jest

7. File config Jest: npx ts-jest config:init