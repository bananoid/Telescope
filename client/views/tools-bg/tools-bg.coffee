toolsChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"]

# Template.toolsBg.helpers
#   toolsNodes:()->
#     str = ""
#     nodes = []

#     for i in [ 0 ... 10 ]
#       r = Math.floor( Math.random() * toolsChars.length )
#       char = toolsChars[r]
#       e = $("span")
#       e.text(char);

#       nodes.push e

#     console.log nodes
#     return nodes

Template.toolsBg.rendered = ()->
  p = $(@firstNode)
  console.log "p", p
  str = ""

  for i in [ 0 ... 30 ]
    r = Math.floor( Math.random() * toolsChars.length )
    char = toolsChars[r]
    e = $("<span>#{char}</span>")
    p.after e

  console.log p

