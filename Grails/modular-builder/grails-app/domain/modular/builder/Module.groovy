package modular.builder

class Module {

    String name
    String description
    Category category

    static constraints = {
        name size: 5..25
        description size: 0..250
    }
}
