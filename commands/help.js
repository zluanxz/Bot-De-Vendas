const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const db = require("quick.db")
const config = require("../config.json")
const dbB = new JsonDatabase({ databasePath:"./databases/myJsonBotConfig.json" });
module.exports = {
    name: "stock", // Coloque o nome do comando do arquivo
    run: async(client, message, args) => {
        const embederro = new Discord.MessageEmbed()
        .setTitle(`Erro - Permissรฃo`)
        .setDescription(`Vocรช nรฃo tem permissรฃo para isto!`)
        .setColor(`${dbB.get(`cor`)}`)
        .setFooter(`${dbB.get(`nomebot`)} - Todos os direitos reservados.`)
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ embeds: [embederro] })
        const embed = new Discord.MessageEmbed()
        .setTitle(`${dbB.get(`nomebot`)} | <:config:1037117083160420352> Comandos do Bot <:config:1037117083160420352> `)
        .setDescription(`
**๐ |  ${config.prefix}help** - Exibe estรก mensagem
**๐ |  ${config.prefix}configbot** - Configurar o Bot (Recomendado se acabou de adquirir o bot)
**๐ |  ${config.prefix}configcanais** - Configurar canais do Bot (Recomendado se acabou de adquirir o bot)
**๐ |  ${config.prefix}configtermos** - Configurar Termos de Compra (Recomendado se acabou de adquirir o bot)
**๐ |  ${config.prefix}criar** - Criar um produto
**๐ |  ${config.prefix}config** - Configurar um Produto
**๐ |  ${config.prefix}status** - Verificar o status de um pagamento
**๐ |  ${config.prefix}stockid** - Mostra o stock desse produto
**๐ |  ${config.prefix}produtoid** - Mostra todos od id dos Produtos criados
**๐ |  ${config.prefix}set** - Setar a mensagem de compra do produto
**๐ |  ${config.prefix}limpar** - Limpa as mensagens do canal
**๐ |  ${config.prefix}estatisticas** - Mostra as estatisticas de suas vendas
**๐ |  ${config.prefix}perfil** - Mostra o perfil de quem enviou o comando(liberado para todos os usuarios)
**๐ |  ${config.prefix}anunciar** - Enviar um anuncio embed
**๐ |  ${config.prefix}reembolso** - Reembolsar alguma compra
**๐ |  ${config.prefix}criarcupom** - Criar um cupom
**๐ |  ${config.prefix}configcupom** - Configurar um Cupom
**๐ |  ${config.prefix}botinfo** - Mostra algumas informaรงรตes sobre o Bot
**๐ |  ${config.prefix}addperms** - Dar perms de Owner do bot
**๐ |  ${config.prefix}removeperms** - Remover perms de Owner do bot`)
.setColor(`${dbB.get(`cor`)}`)
.setThumbnail(`${dbB.get(`foto`)}`)
.setImage(`${dbB.get(`banner`)}`)
message.channel.send({embeds: [embed]})
        
    }
}
