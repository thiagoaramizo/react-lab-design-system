import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Checkbox } from './components/Checkbox'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='grid grid-cols-1 gap-4 w-[400px] px-4'>

          <header className='text-center mb-6'>
            <div className='flex justify-center mb-3'>
              <svg className='hover:animate-spin' height="136" viewBox="175.7 78 490.6 436.9" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="#9C5EEA"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>
            </div>
            <Heading size='xl'>React Lab</Heading>
            <Text size='lg' className='text-gray-500'>
              <p>Faça login e começe a usar!</p>
            </Text>
          </header>

          <label htmlFor='email'>
            <Text size='sm' className='font-semibold mb-1'>
              <label>Endereço de e-mail</label>
            </Text>
            <TextInput.Root>
              <TextInput.Icon><Envelope /></TextInput.Icon>
              <TextInput.Input placeholder='email@exemplo.com' id='email' />
            </TextInput.Root>
          </label>

          <label htmlFor='password'>
            <Text size='sm' className='font-semibold mb-1'>
              <label>Sua senha</label>
            </Text>
            <TextInput.Root>
              <TextInput.Icon><Lock/></TextInput.Icon>
              <TextInput.Input type='password' placeholder='*********' id='password' />
            </TextInput.Root>
          </label>

          <label className='flex items-center gap-2 mb-6' htmlFor='lembrar'>
            <Checkbox id="lembrar" />
            <Text size='sm'>
              <label>Lembrar de mim por 30 dias</label>
            </Text>
          </label>

          <Button type='submit' >Entrar na plataforma</Button>

          <div className='text-center mt-4'>
            <Text size='sm' className='text-gray-500 underline hover:text-gray-800'>
              <p><a href='#'>Esqueceu sua senha</a></p>
            </Text>
          </div>

          <div className='text-center'>
            <Text size='sm' className='text-gray-500 underline hover:text-gray-800'>
              <p><a href='#'>Não possui uma conta? Crie uma agora!</a></p>
            </Text>
          </div>


        </div>
      </div>


      <div className='flex items-center justify-center h-screen'>
        <div className='text-center mb-6'>
          <Heading size='xl'>Bem vindo!</Heading>
          <Text size='lg' className='text-gray-500'>
            <p>Muito bem vindo ao React Lab!</p>
          </Text>
        </div>
      </div>

    </>
  )
}
