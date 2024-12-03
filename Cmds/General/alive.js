module.exports = async (context) => {
    const { client, m, prefix } = context;

const botname = process.env.BOTNAME || "DE4LTMD";

 await client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/d6dab955fbaa42fce2280.jpg' }, caption: `Hello ${m.pushName}, De4ltmd is active now.\n\nType ${prefix}menu to see my command list..\n\nSome important links concerning the bot are given below.\n\nOfficial website:\n https:/de4lmd.site\n\nPairing site:\n https://pair.de4lt.site.\n\nRandom APIs site:\nhttps://api.dreaded.site\n\nThis free random APIs are meant for other developers and may not always work.\n\nXd );`, fileLength: "9999999999898989899999999" }, { quoted: m }); 

}