import {useMetrics} from "../../api/hooks/useMetrics";
import {mocked} from "ts-jest/utils";
import {render, screen} from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";
import React from "react";

jest.mock('../../api/hooks/useMetrics')
const mockedUseMetrics = mocked(useMetrics)

describe("dashboard", () => {

    const leadTimeForChange = [{"buildVersion": "b123", "timeInMinutes": 1180},
        // {"buildVersion":"b121","timeInMinutes":100},
        // {"buildVersion":"b122","timeInMinutes":180},
        // {"buildVersion":"b127","timeInMinutes":10},
        // {"buildVersion":"b126","timeInMinutes":18},
        // {"buildVersion":"b124","timeInMinutes":208},
        {"buildVersion": "b125", "timeInMinutes": 118}
    ]

    const deployments = [{"environment": 1, "deployedAt": "2021-02-14T22:00:50.095240Z", "buildVersion": "b131"},
        {"environment": 2, "deployedAt": "2021-02-17T22:00:50.095240Z", "buildVersion": "b131"},
        {"environment": 1, "deployedAt": "2021-02-12T22:00:50.095240Z", "buildVersion": "b128"},
        {"environment": 2, "deployedAt": "2021-02-14T22:00:14.341302Z", "buildVersion": "b128"}]

    const metrics = {
        serviceName: "blah",
        leadTimeForChange: leadTimeForChange,
        deployments: deployments
    }

    beforeEach(() => {
        mockedUseMetrics.mockReturnValue(metrics)
    })

    it('should have build numbers on x axis when present', () => {
        render(<Dashboard/>)
        screen.getByText('b123')
        screen.getByText('b125')
    })

})
