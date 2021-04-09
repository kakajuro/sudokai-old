import { grid } from './stores';

export const getSudoku = () => {
  fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
  .then(res => res.json())
  .then(parseRes => grid.update(existing => parseRes.board))
}