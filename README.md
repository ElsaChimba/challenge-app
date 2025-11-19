Projeto React Native – Em Desenvolvimento
Este é o repositório do projeto React Native atualmente em desenvolvimento.
Por motivos técnicos (computador com tela danificada), o progresso está temporariamente reduzido, mas o desenvolvimento continuará assim que possível.
Este README foi criado para que qualquer pessoa que acompanhe o projeto possa entender:

📌 Como rodá-lo
📌 Dependências necessárias
📌 Versões compatíveis
📌 Estado atual do desenvolvimento
🚧 Estado Atual do Projeto

O projeto já possui a estrutura base criada em React Native.
As dependências foram instaladas, porém foram identificados avisos relacionados à versão do Node.js.
A versão atual do Node instalada no ambiente é 20.16.0, mas o projeto exige >= 20.19.4.
Próximo passo: atualizar o Node para a versão compatível e continuar o desenvolvimento das telas.
Devido a problemas técnicos com o PC, a continuação do desenvolvimento dependerá de disponibilidade quando o equipamento estiver operacional novamente.

 Tecnologias Utilizadas
React Native 0.82+
Node.js (requerido: >= 20.19.4)
npm 

⚙️ Requisitos
Antes de rodar o projeto, você deve ter instalado:
Node.js 20.19.4 ou superior
👉 https://nodejs.org
npm (instalado junto com o Node)
Emulador Android ou dispositivo físico com Expo Go (se o projeto usar Expo)


Como Rodar o Projeto
1. Instalar dependências
npm install
2. Verificar versão do Node
node -v
Se for inferior a 20.19.4, atualize.
3. Executar no modo desenvolvimento
Se for projeto com React Native CLI:
npx react-native start

Rodar no Android:
npx react-native run-android
Rodar no iOS (macOS):
npx react-native run-ios

Se for um projeto com Expo:
npx expo start
Rodando no Celular

Se o projeto for Expo:
Instale o Expo Go no seu telefone.
Execute:
npx expo start
Abra o QR code com o app Expo Go.

❗ Avisos Importantes
Atualmente o projeto exibe avisos do tipo:
npm WARN EBADENGINE Unsupported engine
Isso ocorre porque o React Native 0.82+ exige Node >= 20.19.4.
Para corrigir, basta atualizar o Node.

📅 Progresso e Atualizações
Última atualização: (colocar a data de hoje)
Desenvolvimento pausado temporariamente devido a falhas no equipamento (tela do computador).
Assim que possível, o desenvolvimento será retomado para finalizar as telas e integrações.

🤝 Contribuição
Pull requests são bem-vindos.
Sinta-se à vontade para abrir issues caso encontre erros ou queira sugerir melhorias.