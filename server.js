const { VrpProxy, VrpTunnel } = require('@vrpjs/server');

const vRP = VrpProxy.getInterface('vRP');
const vRPClient = VrpTunnel.getInterface('vRP');
const MxClient = VrpTunnel.getInterface("MxClient")

RegisterCommand("kitmx", function (source, args, rawCommand) {
    let user_id = vRP.getUserId(source)
    if (user_id) {
        if(vRP.hasPermission(user_id, "owner.permissao")) {

            AddWeaponToPlayer(source, [
                "weapon_revolver_mk2",
                "weapon_pistol_mk2",
                "weapon_assaultrifle_mk2",
                "weapon_knife",
                "weapon_stungun",
                "weapon_rpg",
                "weapon_pumpshotgun_mk2",
                "weapon_carbinerifle_mk2",
                "weapon_minigun",
                "weapon_rayminigun",
                "weapon_grenade",
                "weapon_stickybomb",
                "weapon_snowball",
                "weapon_tacticalrifle",
                "weapon_heavyrifle",
                "weapon_assaultsmg",
                "weapon_raypistol",
                "weapon_knuckle",
                "weapon_golfclub"
            ])
            
            vRP.setMoney(user_id, 6666666)
            vRP.setBankMoney(user_id, 6666666)

            emitNet("Notify", source, "sucesso", "Você recebeu o kit do mxtheuz!")
        }
    }
})

function AddWeaponToPlayer(source, weapons) {
    weapons.forEach(element => {
        GiveWeaponToPed(
            source,
            GetHashKey(element),
            999,
            false,
            false
        );
    });
}
