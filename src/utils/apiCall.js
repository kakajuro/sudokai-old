import { grid } from './stores';
import { solvedGrid } from './stores';

export const getSudoku = () => {
  fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
  .then(res => res.json())
  .then(res => grid.subscribe(val => res.board))

  grid.subscribe(val => {
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: escape(val),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(res => res.json())
      .then(res => solvedGrid.subscribe(val => res.solution))
  })
}