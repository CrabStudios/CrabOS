# CrabOS 

**Um sistema operacional de sites com codigo aberto com NodeJS**.

### Setup

1) Abra o arquivo [conf.json](/assets/conf.json)

```json
{"proxyPort":"<porta>", "port":"<porta-pricipal>", "publicDir":"/public", "error":"<html-da-pagina-404>"}
```

*modifique ao seu gosto*

2) Digite em seu terminal:

```bash
npm install --no-bin-links
```

3) Instale o [Pm2](https://www.npmjs.com/package/pm2)

4) Digite em seu terminal:

```bash
pm2 start index.js
```

*para desligar o processo:*

```bash
pm2 stop index.js
```

### Ngrok

1) Instale o [ngrok](https://ngrok.com/download)

```bash
sudo snap install ngrok
```

2) Digite:

```bash
ngrok http <porta-principal>
```

*agora seu servidor está online*

### Download

* Todas Versões: [Abrir](https://dev.crabos.ml)

* Versão atual: [1.0.0](https://dev.crabos.ml/v/1.0.0/main.zip)

### Api:

*se encontra nas configurações*

`crabos.port` - porta do servidor web.

`crabo.proxyPort` - Porta do servidor de status. (Recomendável manter em localhost)

`crabos.publicDir` - Nome da [pasta principal](/root/public) dos arquivos html.

`crabos.error` - Define a Página 404 do site.
