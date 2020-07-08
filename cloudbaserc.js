module.exports = {
  envId: 'base-f07399',
  functionRoot: './functions',
  functions: [
    {
      name: 'miseckill',
      timeout: 5,
      envVariables: {},
      runtime: 'Nodejs10.15',
      memorySize: 128,
      handler: 'index.main',
    },
  ],
}
