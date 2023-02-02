// interface Todo {
//   id: string,
//   content: string,
//   isComplete: boolean,
//   category: string,
//   tags?: string[],
// }

/**
 * @description Todo 생성
 * @param {string} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} isComplete - 완료 여부
 * @param {string} category - 카테고리
 * @param {string[]} tags - 태그들
 * @returns {boolean} - 생성유무 결과 반환 
 */
const CreateTodo = (id, content, isComplete, category, tags) => {}

/**
 * @description 모든 TodoList 조회
 * @returns {Array} - 모든 TodoArray 반환
 */
const readAllTodo = () => {}

/**
 * @description 특정 ID todo 조회
 * @param {string} id
 * @returns {object} todo object  
 * 
 */
const readTodo = (id) => {}

/**
* @description Todo 업로드
* @param {string} id - 아이디
* @param {string} content - 내용
* @param {boolean} isComplete - 완료 여부
* @param {string} category - 카테고리
* @param {string[]} tags - 태그들
* @returns {boolean} - 생성유무 결과 반환 
* 
 */
const updateTodo = (id, content, isComplete, category, tags ) => {}

/**
* @description todoTags 업로드
* @param {string} id - 아이디
* @param {string[]} tags - 태그들
* @returns {boolean} - 생성유무 결과 반환 
* 
 */
const updateTodoTags = (id, tags) => {}

/**
 * @description Todo 삭제
 * @param {string} id - 아이디
 * @returns {boolean} - 삭제유무 결과 반환 
 */
const deleteTodo = (id) => {}

/**
 * @description 모든 TodoList 삭제
 * @returns {boolean} - 삭제유무 결과 반환 
 */
const deleteAllTodo = () => {}

/**
 * @description 모든 TodoList 삭제
 * @param {string} id - 아이디
 * @param {string} tags - 테그
 * @returns {boolean} - 삭제유무 결과 반환 
 */
const deleteTodoTags = (id, tags) => {}