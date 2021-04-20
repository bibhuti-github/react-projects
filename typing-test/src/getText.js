export default () => {

  const texts = [
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers."
    + " The round pegs in the square holes. The ones who see things differently."
    + " They're not fond of rules. And they have no respect for the status quo."
    + " You can quote them, disagree with them, glorify or vilify them. About the only thing"
    + " you can't do is ignore them. Because they change things. They push the human race forward."
  ];
  
  return texts[Math.floor(Math.random()*texts.length)];

}