import json
with open("inventario.json","r") as j:
    invent=json.load(j)

class InventarioJugador:
    #Atributo
    inventario=[]
    #Constructor
    def __init__(self,inventario):
        self.inventario=inventario
    #Equivalente a Override
    def __str__(self):
        return f"Iventario:{self.inventario}"
    
    #Buscar objetos por energía máxima
    def buscarPorEnergia(cls,max_energia):
        cumple=[]
        for cada_objeto in cls.inventario:
            if cada_objeto["energia"]<=max_energia:
                cumple.append(cada_objeto["nombre"])
                cumple.append(cada_objeto["energia"])
        return cumple
    #Utilizar un objeto
    def usarObjeto(cls,nombre,elemento=None):
        encontrado=False
        eliminar=False
        numEliminar=0
        for cada_objeto in cls.inventario:
            if nombre==cada_objeto["nombre"]:
                encontrado=True
                cada_objeto["usos"]=cada_objeto["usos"]-1
                if cada_objeto["usos"]==0:
                    eliminar=True
                    numEliminar=cls.inventario.index(cada_objeto)
        if eliminar==True:
            cls.inventario.remove(numEliminar)
        return encontrado

    
#INventario que va a ser el json
InventarioJugador1=InventarioJugador(invent)

print(f"{InventarioJugador1.buscarPorEnergia(5)}")
print(f"{InventarioJugador1.usarObjeto("Pocion de energia",None)}")
print(f"{InventarioJugador1.inventario[0]["nombre"]} {InventarioJugador1.inventario[0]["usos"]}")
