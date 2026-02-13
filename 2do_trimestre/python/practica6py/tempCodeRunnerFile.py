import json
with open("inventario.json","r") as j:
    invent=json.load(j)

class ObjetoInventario:
    #Atributo
    inventario=[]
    #Constructor
    def __init__(self):
        self.inventario=invent
    #Equivalente a Override
    def __str__(self):
        return f"Iventario:{self.inventario}"
print(ObjetoInventario)