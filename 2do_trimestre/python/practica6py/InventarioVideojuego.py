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
    
#INventario que va a ser el json
InventarioJugador1=InventarioJugador(invent)

print(f"{InventarioJugador1.buscarPorEnergia(5)}")
