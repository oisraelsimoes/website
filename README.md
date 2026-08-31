# Israel Simões — site oficial

Site institucional de Israel Simões (palestras, educação corporativa,
neurociência e alta performance), construído com Next.js 14 (App Router) e
Tailwind CSS. Projeto 100% estático, sem backend, pronto para deploy na
Vercel.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em https://vercel.com, clique em "Add New Project" e importe o repositório.
3. Framework preset: **Next.js** (detectado automaticamente). Não é
   necessário configurar variáveis de ambiente.
4. Clique em "Deploy". Em poucos minutos o site estará no ar em um domínio
   `*.vercel.app`, podendo depois ser apontado para um domínio próprio
   (ex.: israelsimoes.com.br) em Project Settings → Domains.

Alternativamente, com a Vercel CLI instalada:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Campos para revisar/editar

Todos os dados de contato ficam centralizados em `lib/config.js`:

- `whatsappNumber` / `whatsappMessage` — número e mensagem padrão do botão de WhatsApp
- `email`
- `linkedin`
- `instagram`
- `url` — domínio final do site (atualizar após configurar domínio próprio)

Depois de trocar `url` em `lib/config.js`, atualize também
`metadataBase`/Open Graph em `app/layout.js` caso deseje um valor diferente.

## Conteúdo

Todo o texto do site foi escrito a partir do mídia kit e dos currículos
fornecidos por Israel Simões. Nenhum cliente, número ou depoimento foi
inventado — apenas reescritos com linguagem comercial. Caso quaisquer dados
precisem de atualização (novos clientes, novos números, novas palestras),
edite diretamente os arquivos em `components/` (`Palestras.js`,
`Numeros.js`, `Depoimentos.js`, `Authority.js`, `Sobre.js`).

## Imagens

As fotos usadas estão em `public/images`. Para trocar uma imagem, basta
substituir o arquivo mantendo o mesmo nome, ou atualizar o caminho no
componente correspondente.
