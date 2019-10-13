workflow "lint, test, deploy, publish" {
    on       = "push"

    resolves = [
        "test",
    ]
}

workflow "periodically prune old deployments" {
    resolves = "prune"
    on       = "schedule(0 */12 * * *)"
}

action "npm install" {
    uses = "actions/npm@master"
    runs = "npm ci"
}

action "test" {
    needs = "npm install"
    uses  = "actions/npm@master"
    runs  = "npm test"
}

action "prune" {
    needs   = "npm install"
    uses    = "actions/npm@master"
    runs    = "script/prune"

    secrets = [
        "GITHUB_TOKEN",
        "NOW_TOKEN",
    ]
}
