import awsconfig from '~/aws-exports'
import { Amplify } from 'aws-amplify'

import '@aws-amplify/ui-vue/styles.css'


export const endpoint = 'https://tlr505w5if.execute-api.ap-southeast-1.amazonaws.com/dev'

export default defineNuxtPlugin(() => {
  const aws_cloud_logic_custom: any = [
    {
      name: 'dev',
      endpoint: 'https://tlr505w5if.execute-api.ap-southeast-1.amazonaws.com/dev',
      region: 'ap-southeast-1'
    },
    {
      name: 'stage',
      endpoint: 'https://tlr505w5if.execute-api.ap-southeast-1.amazonaws.com/Stage',
      region: 'ap-southeast-1'
    }
  ]

  Amplify.configure({
    ...awsconfig,

    // @ts-ignore
    aws_cloud_logic_custom
  })
})