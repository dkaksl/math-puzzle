$(document).ready(function() {
    var variables = "abcdefgh".split("");

    $(".answer").text(function() {
        return "4";
    });
    $(".number:not(#hardCoded)").text(function() {
        return " ";
    });
    $("#hardCoded").text(function() {
        return 9;
    });
    $("#clearButton").click(function() {
        for (var i = 0; i < variables.length; i++) {
            document.getElementById(variables[i]).value = "";
        }
    });
    $("#randomButton").click(function() {
        for (var i = 0; i < variables.length; i++) {
            document.getElementById(variables[i]).value = Math.floor(Math.random() * 10) + 1;
        }
    });
    $("#answerButton").click(function() {
        var solutions = getSolutions();
        var randomSolution = solutions[Math.floor(Math.random() * solutions.length)]
        for (var i = 0; i < variables.length; i++) {
            document.getElementById(variables[i]).value = randomSolution[i];
        }

    });
    $("#evaluateButton").click(function() {
        var a = parseInt(document.getElementById('a').value)
        var b = parseInt(document.getElementById('b').value)
        var c = parseInt(document.getElementById('c').value)
        var d = parseInt(document.getElementById('d').value)
        var e = parseInt(document.getElementById('e').value)
        var f = parseInt(document.getElementById('f').value)
        var g = parseInt(document.getElementById('g').value)
        var h = parseInt(document.getElementById('h').value)
        alert(isSolved(a, b, c, d, e, f, g, h) ? "all equations evaluate as true" : "not all equations evaluate as true")
    });

});

function isSolved(a, b, c, d, e, f, g, h) {
    if (a + b !== 13) {
        return false;
    }

    if ((c - d) * e !== 4) {
        return false;
    }

    if (f + g - h !== 4) {
        return false;
    }

    if (a + c !== 4 * f) {
        return false;
    }

    if ((b - d) * g !== 4) {
        return false;
    }

    if (e + h !== 5) {
        return false;
    }

    return true;
}

function getSolutions() {
    var solutions = []
    var from = 0;
    var to = 10;
    var count = 50;
    for (var a = from; a < to; a++) {
        for (var b = from; b < to; b++) {
            for (var c = from; c < to; c++) {
                for (var d = from; d < to; d++) {
                    for (var e = from; e < to; e++) {
                        for (var f = from; f < to; f++) {
                            for (var g = from; g < to; g++) {
                                for (var h = from; h < to; h++) {
                                    if (isSolved(a, b, c, d, e, f, g, h)) {
                                        solutions.push([a, b, c, d, e, f, g, h])
                                        if (solutions.length >= count) {
                                            return solutions;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return solutions;
}