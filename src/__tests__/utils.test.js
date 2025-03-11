import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    /*
    //Arrage:
    const birthYear = 1984;

    //Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    //Assert
    expect(ageOfPerson).toBe(38);
    */

    //below are updated codes:
    //Arrage
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const answer = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toEqual(answer);

  });
});
