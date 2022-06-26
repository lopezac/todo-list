/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const project = (title, priority) => {
    const tasks = [];

    const addTask = task => {
        tasks.push(task);
    };

    const removeTask = task => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i] === task) tasks.splice(i, 1);
        }
    };

    const hasTask = task => {
        return tasks.includes(task);
    };

    const getTask = task => {
        return tasks.find(task);
    };

    const findTask = taskTitle => {
        for (const task of tasks) {
            if (task.title === taskTitle.textContent) {
                return task;
            }
        }
    };

    const replaceTask = (task, newTask) => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i] === task) tasks.splice(i, 1, newTask);
        }
    };

    return {title, priority, tasks, addTask, removeTask, hasTask, getTask,
        findTask, replaceTask};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IHRhc2sgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gdGFzayA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YXNrc1tpXSA9PT0gdGFzaykgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc1Rhc2sgPSB0YXNrID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tzLmluY2x1ZGVzKHRhc2spO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUYXNrID0gdGFzayA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrcy5maW5kKHRhc2spO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kVGFzayA9IHRhc2tUaXRsZSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYXNrID0gKHRhc2ssIG5ld1Rhc2spID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRhc2tzW2ldID09PSB0YXNrKSB0YXNrcy5zcGxpY2UoaSwgMSwgbmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHt0aXRsZSwgcHJpb3JpdHksIHRhc2tzLCBhZGRUYXNrLCByZW1vdmVUYXNrLCBoYXNUYXNrLCBnZXRUYXNrLFxuICAgICAgICBmaW5kVGFzaywgcmVwbGFjZVRhc2t9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=