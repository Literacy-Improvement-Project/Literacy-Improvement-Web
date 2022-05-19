import WordRank from "../../components/organism/page-rank/wordRank"

export default function WordRanking() {

  let wordList = [
    {word: "word1", mean: "mean", score: 10}, 
    {word: "word2", mean: "mean", score: 9}, 
    {word: "word3", mean: "mean", score: 8}, 
    {word: "word4", mean: "mean", score: 7}, 
    {word: "word5", mean: "mean", score: 6}, 
    {word: "word6", mean: "mean", score: 4}, 
    {word: "word7", mean: "mean", score: 2}, 
  ]
  
  return (
    <div>
      <WordRank wordList={wordList}></WordRank>
    </div>
  )
}